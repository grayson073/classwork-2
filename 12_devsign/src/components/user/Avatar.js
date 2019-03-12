import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { getImageUrl } from '../../services/image';

function Avatar({ user, className }) {
  const { handle, profileImg } = user;
  return (
    <figure className={className}>
      <img src={getImageUrl(profileImg, ['fl_region_relative,g_adv_eyes,l_glasses,w_1.7'])} />
      <figcaption>{handle}</figcaption>
    </figure>
  );
}

Avatar.propTypes = {
  user: PropTypes.object.isRequired,
  className: PropTypes.string
};

export default styled(Avatar)`
  display: inline-block;

  img {
    max-width: 250px;
  }

  figcaption {
    text-align: center;
  }
`;
