
import LayoutTitle from "../../ui/Title/LayoutTitle"
import type { PageLayoutProps } from "../../../assets/types/layout.Types";

const PageLayout = ({ children, title, isLoading }: PageLayoutProps) => {
  return (
<main className="layout-view relative overflow-hidden">

  <div className="absolute inset-0 -z-10 hidden dark:block">
    <div
      className="absolute inset-0"
      style={{
        background: `
          radial-gradient(ellipse 120% 80% at 70% 20%, rgba(255, 159, 28, 0.08), transparent 60%),
          radial-gradient(ellipse 100% 60% at 30% 10%, rgba(77, 163, 255, 0.07), transparent 65%),
          radial-gradient(ellipse 90% 70% at 50% 0%, rgba(168, 85, 247, 0.10), transparent 70%),
          #1B1D23
        `,
      }}
    />
  </div>

  <div className="layout-body">
    <div className="layout-header">
      <LayoutTitle text={title} isLoading={isLoading} />
    </div>

    {children}
  </div>

  <footer className="layout-footer copy">
    <p className="sub_overline">®2026 Ramiro Urteaga</p>
  </footer>
</main>
  );
};

export default PageLayout;

