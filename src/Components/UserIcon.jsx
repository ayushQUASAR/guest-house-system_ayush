import React from 'react';
import PropTypes from 'prop-types';
import '../style/UserIcon.css'; // Import the CSS file

const UserIcon = ({ username}) => {
  const firstCharacter = username.charAt(0).toUpperCase();

  return (
    <>
    <div className="user-icon">
      {username != "" && firstCharacter} 
    </div>
    </>
  );
};

UserIcon.propTypes = {
  username: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};
UserIcon.defaultProps = {
  username : 'Admin'
}
export default UserIcon;
