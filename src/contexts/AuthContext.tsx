import { createContext, type ReactNode, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

type Role = "admin" | "member";
type Status = "validated" | "pending";

type AuthUser = {
  id: string;
  name: string;
  email: string;
  role: Role;
  status: Status;
};

type AuthRecord = AuthUser & { password: string };

type AuthContextValue = {
  user: AuthUser | null;
  users: AuthUser[];
  isLoading: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  register: (payload: { firstName: string; lastName: string; email: string; password: string }) => Promise<boolean>;
  approveUser: (userId: string) => void;
  rejectUser: (userId: string) => void;
};

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

const STORAGE_KEY = "miage_forum_user";

const initialUsers: AuthRecord[] = [
  {
    id: "1",
    name: "Admin MIAGE Forum",
    email: "admin@miageforum.fr",
    password: "admin123",
    role: "admin",
    status: "validated",
  },
  {
    id: "2",
    name: "Étudiant MIAGE",
    email: "etudiant@miageforum.fr",
    password: "etudiant123",
    role: "member",
    status: "validated",
  },
  {
    id: "3",
    name: "Compte Démo",
    email: "demo@miageforum.fr",
    password: "demo123",
    role: "member",
    status: "pending",
  },
];

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const navigate = useNavigate();
  const [records, setRecords] = useState<AuthRecord[]>(initialUsers);
  const [user, setUser] = useState<AuthUser | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        const parsed = JSON.parse(stored) as AuthUser;
        const exists = records.find((record) => record.id === parsed.id);
        if (exists) {
          setUser(parsed);
        }
      } catch (error) {
        console.error("Failed to parse stored auth user", error);
      }
    }
  }, [records]);

  useEffect(() => {
    if (user) {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
    } else {
      window.localStorage.removeItem(STORAGE_KEY);
    }
  }, [user]);

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 600));

    const record = records.find((candidate) => candidate.email === email.toLowerCase());
    if (!record || record.password !== password) {
      setIsLoading(false);
      return false;
    }

    const { password: _password, ...rest } = record;
    setUser(rest);
    setIsLoading(false);
    return true;
  };

  const logout = () => {
    setUser(null);
    navigate("/");
  };

  const register: AuthContextValue["register"] = async ({ email, firstName, lastName, password }) => {
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 800));

    const exists = records.some((record) => record.email === email.toLowerCase());
    if (exists) {
      setIsLoading(false);
      return false;
    }

    const newRecord: AuthRecord = {
      id: typeof crypto !== "undefined" && "randomUUID" in crypto ? crypto.randomUUID() : Date.now().toString(),
      name: `${firstName} ${lastName}`.trim(),
      email: email.toLowerCase(),
      password,
      role: "member",
      status: "pending",
    };

    setRecords((prev) => [...prev, newRecord]);
    setUser({
      id: newRecord.id,
      name: newRecord.name,
      email: newRecord.email,
      role: newRecord.role,
      status: newRecord.status,
    });
    setIsLoading(false);
    return true;
  };

  const approveUser = useCallback((userId: string) => {
    setRecords((prev) => prev.map((record) => (record.id === userId ? { ...record, status: "validated" } : record)));
    setUser((prev) => (prev && prev.id === userId ? { ...prev, status: "validated" } : prev));
  }, []);

  const rejectUser = useCallback((userId: string) => {
    setRecords((prev) => prev.filter((record) => record.id !== userId));
    setUser((prev) => (prev && prev.id === userId ? null : prev));
  }, []);

  const value = useMemo<AuthContextValue>(
    () => ({
      user,
      users: records.map(({ password, ...rest }) => rest),
      isLoading,
      login,
      logout,
      register,
      approveUser,
      rejectUser,
    }),
    [user, records, isLoading, login, logout, register, approveUser, rejectUser],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
