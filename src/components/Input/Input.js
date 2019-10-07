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
    } = this.props;
    const { isFocused } = this.state;

    const rootClass = `control ${isFocused ? 'control--focused' : ''} ${className}`;

    return (
      <div
        className={rootClass}
        onClick={this.focus}
        role="presentation"
      >
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
          className="control__input"
          placeholder={placeholder}
        />
      </div>
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
};

Input.defaultProps = {
  iconUrl: '',
  type: 'text',
  placeholder: '',
  className: '',
};
