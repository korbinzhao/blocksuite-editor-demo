import './tool-icon-button.js';
export declare const lineSizeButtonStyles: import("lit").CSSResult[];
export interface LineSizeButtonProps {
    className?: string;
    size: 's' | 'l';
    active?: boolean;
    tooltip?: string;
    onClick: (event: MouseEvent) => void;
}
export declare function LineSizeButton({ className, size, active, tooltip: tooltipFromProps, onClick, }: LineSizeButtonProps): import("lit").TemplateResult<1>;
//# sourceMappingURL=line-size-button.d.ts.map