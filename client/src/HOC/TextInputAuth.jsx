import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const TextInputAuth = ({
  name,
  placeholder,
  value,
  error,
  id,
  type,
  onChange,
  title,
  className
}) => {
  return (
    <div className="form-group">
      <input
        type={type}
        id={id}
        name={name}
        className={classnames(className, {
          'is-invalid': error
        })}
        placeholder={placeholder}
        title={title}
        value={value}
        onChange={onChange}
      />
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

TextInputAuth.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  icon: PropTypes.string,
  error: PropTypes.string,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

TextInputAuth.defaultProps = {
  type: 'text'
};

export default TextInputAuth;
