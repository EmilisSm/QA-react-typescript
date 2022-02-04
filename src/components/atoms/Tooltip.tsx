interface TooltipProps {
  tooltipText: string;
}

export const Tooltip: React.FC<TooltipProps> = ({ children, tooltipText }) => (
  <div className="tooltip">
    {children}
    <span className="tooltip-text">{tooltipText}</span>
  </div>
);
