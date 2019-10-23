/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { PureComponent, createRef } from 'react';
import PropTypes from 'prop-types';
import './Input.scss';

export class Input extends PureComponent {
  state = {
    isFocused: false,
  };

  inputRef = createRef();

  handleFocus = () => this.setState({ isFocused: true });

  handleBlur = () => this.setState({ isFocused: false });

  focus = () => this.inputRef.current.focus();

  render() {
    const {
      iconUrl,
      value,
      onChange,
      name,
      type,
      placeholder,
      className,
      isSmall,
      label,
    } = this.props;
    const { isFocused } = this.state;

    const inputWrapperClass = `control__input-wrapper ${isFocused
      ? 'control__input-wrapper--focused' : ''} ${className}`;
    const inputClass = `control__input ${!isSmall
      ? 'control_input--small' : ''},
      ${type === 'time' ? 'control__input--time' : ''} ${className}`;

    return (
      <label className="control">
        {label && (
          <p className="control__label">
            {label}
          </p>
        )}

        <div className={inputWrapperClass}>
          {!!iconUrl && (
            <img
              src={iconUrl}
              alt={placeholder}
              className="control__icon"
              placeholder={placeholder}
            />
          )}

          <input
            ref={this.inputRef}
            type={type}
            value={value}
            onChange={onChange}
            name={name}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
            className={inputClass}
            placeholder={placeholder}
          />
        </div>
      </label>
    );
  }
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  iconUrl: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  isSmall: PropTypes.bool,
  label: PropTypes.string,
};

Input.defaultProps = {
  iconUrl: '',
  type: 'text',
  placeholder: '',
  label: '',
  className: '',
  isSmall: true,
};
