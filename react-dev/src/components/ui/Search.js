import React, { useEffect, useState } from "react";
import classNames from "classnames";
import { SearchOutlined } from "@ant-design/icons";

import Input from "../input/Input";
import { SearchContainer } from "./ui.style";

/**
 *
 * @param {Object} props
 * @param {(value: String) => String} props.onChange
 * @param {(value: String) => String} props.onSearch
 * @param {String} props.defaultValue
 * @param {React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>} props.inputProps
 * @returns
 */
const Search = ({ onChange, onSearch, defaultValue, inputProps }) => {
  const [focus, setFocus] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setSearch(defaultValue);
  }, [defaultValue]);

  /**
   *
   * @param {React.ChangeEvent<HTMLInputElement>} e
   * @returns
   */
  const handleChange = (e) => {
    const { value } = e.target;
    setSearch(value);
    if (typeof onChange === "function") {
      onChange(value);
    }
  };

  return (
    <SearchContainer>
      <SearchOutlined className={classNames({ focus })} />
      <Input
        {...inputProps}
        className="search-input"
        placeholder="Find whatever you want"
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        onChange={handleChange}
        onKeyPress={({ key }) =>
          key === "Enter" && typeof onSearch === "function" && search
            ? onSearch(search)
            : false
        }
        value={search}
      />
    </SearchContainer>
  );
};

export default Search;
