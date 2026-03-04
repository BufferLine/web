interface SlideProps {
  children: React.ReactNode;
  className?: string;
}

export default function Slide({ children, className = "" }: SlideProps) {
  return (
    <div
      className={`min-h-screen w-full flex flex-col items-center justify-start md:justify-center px-4 pt-20 pb-24 md:px-8 md:pt-24 md:pb-24 lg:p-16 ${className}`}
    >
      {children}
    </div>
  );
}
