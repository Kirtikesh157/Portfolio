import { Link } from "react-router-dom";
import { ChevronLeft } from "lucide-react";

const BackButton = ({ to = "/" }: { to?: string }) => {
  return (
    <Link
      to={to}
      className="inline-flex items-center gap-1 rounded-full border border-border bg-secondary/60 px-4 py-1.5 text-sm font-medium text-foreground hover:bg-secondary hover:border-primary/50 transition-colors"
    >
      <ChevronLeft className="h-4 w-4" />
      Go back
    </Link>
  );
};

export default BackButton;
