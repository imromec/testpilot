import React from 'react';
import { uninstallAddon } from '../lib/addon';

export default class RetireConfirmationDialog extends React.Component {
  render() {
    return (
      <div className="modal-container">
        <div id="retire-dialog-modal" className="modal feedback-modal modal-bounce-in">
          <header>
            <h3 className="title warning" data-l10n-id="retireDialogTitle">Uninstall Test Pilot?</h3>
          </header>
          <form>

            <div className="modal-content modal-form">
              <p data-l10n-id="retireMessage" className="centered">As you wish. This will disable any active tests, uninstall the Test Pilot add-on, and remove your account information from our servers.</p>
              <p data-l10n-id="retireEmailMessage" className="centered small">To opt out of email updates, simply click the <em>unsubscribe</em> link on any Test Pilot email.</p>
            </div>
            <div className="modal-actions">
              <button onClick={e => this.proceed(e)} data-hook="submit-feedback" data-l10n-id="retireSubmitButton" className="submit button warning large">Proceed</button>
              <a onClick={e => this.cancel(e)} data-l10n-id="retireCancelButton" className="cancel modal-escape" href="">Cancel</a>
            </div>
          </form>
        </div>
      </div>
    );
  }

  proceed(e) {
    e.preventDefault();
    uninstallAddon();
    this.props.navigateTo('/retire');
  }

  cancel(e) {
    e.preventDefault();
    this.props.onDismiss();
  }
}
