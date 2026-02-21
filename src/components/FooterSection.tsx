import { Instagram } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="border-t border-border py-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="font-display text-xl gradient-text-gold">Chef Amellie Bitt</p>
            <p className="font-body text-muted-foreground text-sm mt-1">Receitas que transformam sua cozinha.</p>
          </div>

          <div className="flex items-center gap-6 font-body text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-primary transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-primary transition-colors">Contato</a>
            <a
              href="https://www.instagram.com/chefamelliebitt/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>

        <p className="font-body text-muted-foreground/50 text-xs text-center mt-8">
          © {new Date().getFullYear()} Chef Amellie Bitt. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;
