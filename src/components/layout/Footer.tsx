const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="section-container py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-semibold">Milos Avramovic</p>
            <p className="text-sm text-primary-foreground/70">
              Senior System Administrator | IT Infrastructure Consultant
            </p>
          </div>
          
          <p className="text-sm text-primary-foreground/70">
            © {currentYear} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
