import React from "react";
import "./directory.styles.scss";
import { connect } from "react-redux";
import { selectSections } from "../../redux/directory/directory.selectors";
import { createStructuredSelector } from "reselect";
import MenuItem from "../../components/menu-item/menu-item.component";

const Directory = ({ sections }) => {
  return (
    <div className="directory-menu">
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: selectSections,
});

export default connect(mapStateToProps)(Directory);
