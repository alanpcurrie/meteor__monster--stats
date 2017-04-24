//import dependancies
import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';

//create component
export default class Help extends Component {
  render() {
    return (
      <div className="row">
        <div className="input-field col s12 m12 l12">
          <h1 className={css(styles.bangers)}>Please Halp</h1>
          <h2 className={css(styles.oswald)}>How to use</h2>
            <p>To user monster mayhem an account is required. You can sign in with a Facebook account or conventional email sign up.</p>
            <p>A new user should click “create account” a Facebook user should use the “sign in with Facebook” button.</p>
            <h4 className={css(styles.oswald)}>Email users</h4>
            <p>email users can perform the following account steps.</p>
            <ul>
              <li>Create account</li>
              <li>sign in</li>
              <li>sign out</li>
              <li>reset password</li>
            </ul>
            <h2 className={css(styles.oswald)}>The fun beings</h2>
            <p>As a registered user, you can accomplish the following actions to keep track of your monster stats.</p>
            <ul>
              <li>Add a monster</li>
              <li>Edit a monster</li>
              <li>Delete a monster</li>
              <li>View a monsters over power on the monster graph</li>
            </ul>

        </div>
      </div>
      );
    }
  }

      const styles = StyleSheet.create ({
        bangers: {
          fontFamily: "bangers",
        },
        oswald: {
          fontFamily: "oswald",
        },
      });
