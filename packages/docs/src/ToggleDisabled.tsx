type Props = {
  disabled: boolean;
  setter: (disabled: boolean) => void;
};

export function ToggleDisabled({ disabled, setter }: Props) {
  return (
    <label className="toggle-disabled">
      <input
        type="checkbox"
        checked={disabled}
        onChange={(e) => setter(e.target.checked)}
      />
      Disabled
    </label>
  );
}
