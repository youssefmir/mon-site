import { useState } from "react";
import { Button } from "@/components/ui/button";
import MiageForumLogo from "@/assets/Miage Forum.svg";
import { useNavigate } from "react-router-dom";
import { LogOut, Settings, Shield, User } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";

const Header = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);

  const handleNavigate = (path: string) => {
    setShowDropdown(false);
    if (path.startsWith('/#')) {
      const sectionId = path.replace('/#', '');
      if (window.location.pathname !== '/') {
        navigate('/', { state: { scrollTo: sectionId } });
      } else {
        const target = document.getElementById(sectionId);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }
      return;
    }

    navigate(path);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-white/70 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 lg:px-10">
        <button onClick={() => navigate('/')} aria-label="Accueil Miage Forum" className="flex items-center">
          <img src={MiageForumLogo} alt="MIAGE Forum" className="h-16 w-auto" />
        </button>

        <nav className="hidden items-center gap-10 text-lg font-bold text-muted-foreground/80 lg:flex">
          <button type="button" onClick={() => handleNavigate('/#about')} className="transition-colors hover:text-foreground">
            À propos
          </button>
          <button type="button" onClick={() => handleNavigate('/services')} className="transition-colors hover:text-foreground">
            Services
          </button>
          <button type="button" onClick={() => handleNavigate('/evenements')} className="transition-colors hover:text-foreground">
            Événements
          </button>
          <button type="button" onClick={() => handleNavigate('/contact')} className="transition-colors hover:text-foreground">
            Contact
          </button>
          {user && (
            <>
              <button type="button" onClick={() => handleNavigate('/annuaire')} className="transition-colors hover:text-foreground">
                Annuaire
              </button>
            </>
          )}
        </nav>

        <div className="flex items-center gap-3">
          {user ? (
            <div className="relative">
              <Button
                variant="outline"
                onClick={() => setShowDropdown((previous) => !previous)}
                className="flex items-center gap-2 border-border/70 bg-white/80 px-5"
              >
                <User className="h-4 w-4" />
                {user.role === 'admin' ? 'Admin MIAGE Forum' : user.name}
              </Button>
              {showDropdown && (
                <div className="glass-panel absolute right-0 mt-3 w-56 rounded-2xl border border-border/60 bg-white/80 p-3 shadow-elevated">
                  <div className="mb-3 rounded-xl border border-border/50 bg-muted/40 p-3">
                    <p className="text-sm font-semibold text-foreground">{user.name}</p>
                    <p className="text-xs text-muted-foreground">{user.email}</p>
                  </div>
                  <div className="space-y-1 text-sm">
                    <button
                      type="button"
                      onClick={() => handleNavigate('/annuaire')}
                      className="flex w-full items-center gap-2 rounded-xl px-3 py-2 text-muted-foreground transition-colors hover:bg-muted/60 hover:text-foreground"
                    >
                      <User className="h-4 w-4" />
                      Annuaire
                    </button>
                    <button
                      type="button"
                      onClick={() => handleNavigate('/services')}
                      className="flex w-full items-center gap-2 rounded-xl px-3 py-2 text-muted-foreground transition-colors hover:bg-muted/60 hover:text-foreground"
                    >
                      <Settings className="h-4 w-4" />
                      Mes services
                    </button>
                    {user.role === 'admin' && (
                      <button
                        type="button"
                        onClick={() => handleNavigate('/admin-dashboard')}
                        className="flex w-full items-center gap-2 rounded-xl border border-red-200/70 bg-red-50/70 px-3 py-2 text-red-600 transition-colors hover:bg-red-100"
                      >
                        <Shield className="h-4 w-4" />
                        Dashboard admin
                      </button>
                    )}
                    <button
                      type="button"
                      onClick={() => {
                        logout();
                        setShowDropdown(false);
                      }}
                      className="flex w-full items-center gap-2 rounded-xl px-3 py-2 text-muted-foreground transition-colors hover:bg-muted/60 hover:text-foreground"
                    >
                      <LogOut className="h-4 w-4" />
                      Se déconnecter
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <>
              <Button variant="ghost" className="hidden px-5 sm:inline-flex" onClick={() => navigate('/login')}>
                Se connecter
              </Button>
              <Button className="px-7" onClick={() => navigate('/register')}>
                Rejoindre
              </Button>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
