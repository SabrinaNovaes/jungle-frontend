type CampoFormularioProps = {
  label: string;
  children: React.ReactNode;
  className?: string;
};

function CampoFormulario({
  label,
  children,
  className = '',
}: CampoFormularioProps) {
  return (
    <div className={`flex min-w-0 flex-col ${className}`}>
      <label className="field-label">
        {label}
        <span className="req ml-1" aria-hidden="true">*</span>
      </label>
      {children}
    </div>
  );
}

export default CampoFormulario;
