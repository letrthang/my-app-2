import '@vaadin/app-layout';
import { AppLayout } from '@vaadin/app-layout';
import '@vaadin/app-layout/vaadin-drawer-toggle';
import '@vaadin/avatar/vaadin-avatar';
import '@vaadin/context-menu';
import '@vaadin/tabs';
import '@vaadin/tabs/vaadin-tab';
import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { router } from '../index';
import { appStore } from '../stores/app-store';
import { Layout } from './view';

interface RouteInfo {
  path: string;
  title: string;
  icon: string;
}

@customElement('main-layout')
export class MainLayout extends Layout {
  render() {
    return html`
      <vaadin-app-layout primary-section="drawer">
        <header class="view-header" slot="navbar">
          <vaadin-drawer-toggle aria-label="Menu toggle" class="view-toggle" theme="contrast"></vaadin-drawer-toggle>
          <h1 class="view-title">${appStore.currentViewTitle}</h1>
        </header>
        <section class="drawer-section" slot="drawer">
          <h2 class="app-name">${appStore.applicationName}</h2>
          <nav aria-labelledby="views-title" class="menu-item-container">
            <ul class="navigation-list">
              ${this.getMenuRoutes().map(
                (viewRoute) => html`
                  <li>
                    <a
                      ?highlight=${viewRoute.path == appStore.location}
                      class="menu-item-link"
                      href=${router.urlForPath(viewRoute.path)}
                    >
                      <span class="${viewRoute.icon} menu-item-icon"></span>
                      <span class="menu-item-text">${viewRoute.title}</span>
                    </a>
                  </li>
                `
              )}
            </ul>
          </nav>
          <footer class="footer"></footer>
        </section>
        <slot></slot>
      </vaadin-app-layout>
    `;
  }

  connectedCallback() {
    super.connectedCallback();
    this.classList.add('block', 'h-full');
    this.reaction(
      () => appStore.location,
      () => {
        AppLayout.dispatchCloseOverlayDrawerEvent();
      }
    );
  }

  private getMenuRoutes(): RouteInfo[] {
    return [
      {
        path: 'hello',
        title: 'Hello World',
        icon: 'la la-globe',
      },

      {
        path: 'about',
        title: 'About',
        icon: 'la la-file',
      },

      {
        path: 'collaborative-master-detail',
        title: 'Collaborative Master-Detail',
        icon: 'la la-columns',
      },

      {
        path: 'person-form',
        title: 'Person Form',
        icon: 'la la-user',
      },

      {
        path: 'master-detail',
        title: 'Master-Detail',
        icon: 'la la-columns',
      },

      {
        path: 'hello-world',
        title: 'Hello World2',
        icon: 'la la-globe',
      },

      {
        path: 'master-detail2',
        title: 'Master-Detail2',
        icon: 'la la-columns',
      },

      {
        path: 'hello-world2',
        title: 'Hello World3',
        icon: 'la la-globe',
      },

      {
        path: 'master-detail3',
        title: 'Master-Detail3',
        icon: 'la la-columns',
      },

      {
        path: 'checkout-form',
        title: 'Checkout Form',
        icon: 'la la-credit-card',
      },

      {
        path: 'card-list',
        title: 'Card List',
        icon: 'la la-list',
      },

      {
        path: 'address-form',
        title: 'Address Form',
        icon: 'la la-map-marker',
      },

      {
        path: 'chat',
        title: 'Chat',
        icon: 'la la-comments',
      },

      {
        path: 'empty',
        title: 'Empty',
        icon: 'la la-file',
      },

      {
        path: 'rich-text-editor',
        title: 'Rich Text Editor',
        icon: 'la la-edit',
      },

      {
        path: 'dashboard',
        title: 'Dashboard',
        icon: 'la la-chart-area',
      },

      {
        path: 'list',
        title: 'List',
        icon: 'la la-th',
      },
    ];
  }
}
