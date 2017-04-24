//import dependancies
import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';

//create component
export default class Cookies extends Component {
  render() {
    return (
      <div className="row">
        <div className="input-field col s12 m12 l7">
          <h2 className={css(styles.bangers)}>Cookies Nom Nom</h2>
            <p>By using our websites (through any device) you agree that this Cookies Policy applies to that use in addition to any other terms and conditions which may apply.</p>

            <p>We reserve the right to make changes to our Cookies Policy. Any changes will appear here and become effective immediately. Your continued use of our websites is taken as meaning that you agree to such changes.</p>
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
