import './Filter.css'

function Filter({ value, onChange, placeholder, options = [], size = 'md' }) {
  return (
    <label className={'filter' + (size === 'sm' ? ' filter--sm' : '')}>
      <select
        className="filter__select"
        value={value ?? ''}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      <span className="filter__arrow" aria-hidden="true">▾</span>
    </label>
  )
}

export default Filter