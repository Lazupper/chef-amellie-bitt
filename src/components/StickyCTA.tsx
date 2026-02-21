const CHECKOUT_URL = "https://pay.kirvano.com/22ef5fd4-6ee2-4df6-9371-710c50758e73";

const StickyCTA = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-background/90 backdrop-blur-md border-t border-border p-3">
      <a
        href={CHECKOUT_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-cta animate-pulse-soft block text-center w-full text-base"
      >
        QUERO MINHAS RECEITAS
      </a>
    </div>
  );
};

export default StickyCTA;
