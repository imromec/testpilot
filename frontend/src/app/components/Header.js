import React from 'react';
import { Link } from 'react-router';

import classnames from 'classnames';

// import { sendMessage } from '../lib/addon';
import { sendToGA } from '../lib/utils';

import RetireConfirmationDialog from '../containers/RetireConfirmationDialog';
import DiscussDialog from './DiscussDialog';

export default class Header extends React.Component {

  constructor(props) {
    super(props);
    this.closeTimer = null;
    this.close = this.close.bind(this);
    this.state = {
      showSettings: false,
      showDiscussDialog: false,
      showRetireDialog: false
    };
  }

  render() {
    const { showSettings, showRetireDialog, showDiscussDialog } = this.state;
    const { hasAddon } = this.props;

    return (
      <header id="main-header" className="responsive-content-wrapper">

        {showRetireDialog &&
          <RetireConfirmationDialog onDismiss={() => this.setState({ showRetireDialog: false })} />}

        {showDiscussDialog &&
          <DiscussDialog
            href="https://discourse.mozilla-community.org/c/test-pilot"
            onDismiss={() => this.setState({ showDiscussDialog: false })} />}

        <h1>
          <Link to="/" className="wordmark" data-l10n-id="siteName">Firefox Test Pilot</Link>
        </h1>
        {hasAddon &&
        <div data-hook="settings">
          <div className="settings-contain" data-hook="active-user">
             <div className={classnames(['button', 'outline', 'settings-button'], { active: showSettings })}
                  onClick={e => this.toggleSettings(e)}
                  data-hook="settings-button" data-l10n-id="menuTitle">Settings</div>
               {showSettings && <div className="settings-menu" onClick={e => this.settingsClick(e)}>
               <ul>
                 <li><a onClickCapture={e => this.wiki(e)} data-l10n-id="menuWiki" data-hook="wiki"
                    href="https://wiki.mozilla.org/Test_Pilot" target="_blank">Test Pilot Wiki</a></li>
                 <li><a onClickCapture={e => this.discuss(e)} data-l10n-id="menuDiscuss" data-hook="discuss"
                    href="https://discourse.mozilla-community.org/c/test-pilot" target="_blank">Discuss Test Pilot</a></li>
                 <li><a onClickCapture={e => this.fileIssue(e)} data-l10n-id="menuFileIssue" data-hook="issue"
                    href="https://github.com/mozilla/testpilot/issues/new" target="_blank">File an Issue</a></li>
                 <li><hr /></li>
                 <li><a onClickCapture={e => this.retire(e)} data-l10n-id="menuRetire" data-hook="retire">Uninstall Test Pilot</a></li>
               </ul>
             </div>}
          </div>
        </div>}
      </header>
    );
  }

  // HACK: We want to close the settings menu on any click outside the menu.
  // However, a manually-attached event listener on document.body seems to fire
  // the 'close' event before any other clicks register inside the settings
  // menu. So, here's a kludge to schedule a menu close on any click, but
  // cancel if the click was inside the menu. Sounds backwards, but it works.

  componentDidMount() {
    document.body.addEventListener('click', this.close);
  }

  componentWillUnmount() {
    if (this.closeTimer) { clearTimeout(this.closeTimer); }
    document.body.removeEventListener('click', this.close);
  }

  close() {
    if (!this.state.showSettings) { return; }
    this.closeTimer = setTimeout(() =>
      this.setState({ showSettings: false }), 10);
  }

  settingsClick() {
    if (this.closeTimer) { clearTimeout(this.closeTimer); }
  }

  toggleSettings(ev) {
    ev.stopPropagation();
    sendToGA('event', {
      eventCategory: 'Menu Interactions',
      eventAction: 'drop-down menu',
      eventLabel: 'Toggle Menu'
    });
    if (this.state.showSettings) {
      this.close(ev);
    } else {
      this.setState({ showSettings: true });
    }
  }

  retire(evt) {
    evt.preventDefault();
    sendToGA('event', {
      eventCategory: 'Menu Interactions',
      eventAction: 'drop-down menu',
      eventLabel: 'Retire'
    });
    this.setState({ showRetireDialog: true });
    this.close();
  }

  discuss(evt) {
    evt.preventDefault();
    sendToGA('event', {
      eventCategory: 'Menu Interactions',
      eventAction: 'drop-down menu',
      eventLabel: 'Discuss'
    });
    this.setState({ showDiscussDialog: true });
    this.close();
  }

  wiki() {
    sendToGA('event', {
      eventCategory: 'Menu Interactions',
      eventAction: 'drop-down menu',
      eventLabel: 'wiki'
    });
    this.close();
  }

  fileIssue() {
    sendToGA('event', {
      eventCategory: 'Menu Interactions',
      eventAction: 'drop-down menu',
      eventLabel: 'file issue'
    });
    this.close();
  }
}

Header.propTypes = {
  hasAddon: React.PropTypes.bool
};
