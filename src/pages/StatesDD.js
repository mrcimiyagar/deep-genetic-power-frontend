import React from 'react'
import {useState} from 'react'
import { Dropdown, FormControl } from 'react-bootstrap';
import $ from 'jquery';

let labelRef = null;

const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
  <a
    id="toggleId"
    href=""
    ref={ref}
    onClick={e => {
      e.preventDefault();
      labelRef = ref;
      onClick(e);
    }}
  >
    {children}
    &#x25bc;
  </a>
));

// forwardRef again here!
// Dropdown needs access to the DOM of the Menu to measure it
const CustomMenu = React.forwardRef(
  ({ children, style, className, 'aria-labelledby': labeledBy }, ref) => {
    const [value, setValue] = useState('');

    return (
      <div
        ref={ref}
        style={style}
        className={className}
        aria-labelledby={labeledBy}
      >
        <FormControl
          autoFocus
          className="mx-3 my-2 w-auto"
          placeholder="جستجو..."
          onChange={e => setValue(e.target.value)}
          value={value}
          style={{
            color: '#000',
            '::placeholder': {
              color: '#000'
            }
          }}
        />
        <ul className="list-unstyled">
          {React.Children.toArray(children).filter(
            child =>
              !value || child.props.children.toLowerCase().startsWith(value),
          )}
        </ul>
      </div>
    );
  },
);

const StatesDD = () => (
  <div style={{
    width: '100%',
    height: 64,
    position: 'relative',
    zIndex: 1000
  }}>
  <div style={{
    width: 150,
    position: 'absolute',
    left: '50%',
    transform: 'translate(-50%, 0)'
  }}>
  <Dropdown style={{
    display: 'inline',
    float: 'left'
  }}>
    <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
      گیلان
    </Dropdown.Toggle>

    <Dropdown.Menu as={CustomMenu}>
      <Dropdown.Item eventKey="1">گیلان</Dropdown.Item>
      <Dropdown.Item eventKey="1">مازندران</Dropdown.Item>
      <Dropdown.Item eventKey="1">اردبیل</Dropdown.Item>
      <Dropdown.Item eventKey="1">قزوین</Dropdown.Item>
      <Dropdown.Item eventKey="1">زنجان</Dropdown.Item>
      <Dropdown.Item eventKey="1">البرز</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>

  <Dropdown style={{
    display: 'inline',
    float: 'right'
  }}>
    <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
      رشت
    </Dropdown.Toggle>

    <Dropdown.Menu as={CustomMenu}>
      <Dropdown.Item eventKey="1">گیلان</Dropdown.Item>
      <Dropdown.Item eventKey="1">مازندران</Dropdown.Item>
      <Dropdown.Item eventKey="1">اردبیل</Dropdown.Item>
      <Dropdown.Item eventKey="1">قزوین</Dropdown.Item>
      <Dropdown.Item eventKey="1">زنجان</Dropdown.Item>
      <Dropdown.Item eventKey="1">البرز</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
  </div>
  </div>
);

export default StatesDD;
