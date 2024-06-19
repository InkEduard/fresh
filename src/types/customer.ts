export enum UserInteractionEvents {
  Touchstart = 'touchstart',
  Mousedown = 'mousedown',
  Mousemove = 'mousemove',
  Keydown = 'keydown',
  Scroll = 'scroll',
}

export type SelectorType = {
  customerAddresses: string;
  addressCountrySelect: string;
  addressContainer: string;
  toggleAddressButton: string;
  cancelAddressButton: string;
  deleteAddressButton: string;
};

export type AttributeType = {
  expanded: string;
  confirmMessage: string;
};

export type ElementsType =
  | {
      container: HTMLElement;
      addressContainer: HTMLElement;
      toggleButtons: NodeListOf<Element>;
      cancelButtons: NodeListOf<Element>;
      deleteButtons: NodeListOf<Element>;
      countrySelects: NodeListOf<Element>;
    }
  | object;
