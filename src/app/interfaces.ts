import { firestore } from 'firebase';

export interface SidenavLink {
  /**
   * The link of the navigation item
   */
  link?: string;
  /**
   * The icon of the navigation icon
   */
  icon?: string;
  /**
   * The icon of the navigation icon as an SVG icon
   */
  svgIcon?: string;
  /**
   * The title of the navigation item
   */
  title?: string;
  /**
   * A sublist of the navigation item
   *
   * Note: Only one sublist can be created.
   */
  list?: SidenavLink[];
}
export interface Settings {
  /**
   * Whether to enable the experimental calendar
   */
  enableCalendar?: boolean;
  /**
   * The default view to show the todos
   */
  todoView?: 'list' | 'table' | 'agenda';
  /**
   * Whether to enable dark theme
   */
  enableDarkTheme?: boolean;
  /**
   * Whether to enable notifications
   */
  enableNotifications?: boolean;
  /**
   * Whether to enable experimental stuff
   */
  enableExperimental?: boolean;
  /**
   * Whether to close the sidenav when a list item is clicked
   */
  closeSidenavOnClick?: boolean;
}
export interface TodoItem {
  /**
   * The content of the todo
   */
  content?: string;
  /**
   * The title of the todo
   */
  title: string;
  /**
   * The due date of the todo
   */
  dueDate?: firestore.Timestamp;
  /**
   * Whether the todo has already been finished
   */
  hasDone?: boolean;
  /**
   * The tags to assign to the todo
   */
  tags?: string[];
  /**
   * The project that the todo is in
   */
  project?: string;
  /**
   * The id of the todo
   */
  id?: string | any;
}

export interface Chat {
  id: string;
  name: string;
  people: string[];
  lastModified?: Date;
  createdAt: Date;
  owner: string;
  notifications?: number | string;
}

export interface TodoProject {
  /**
   * The name of the project
   */
  name: string;
  /**
   * The project document's ID
   */
  id?: string;
  /**
   * The color of the project in hexadecimal color
   */
  color?: string;
  /** The Material icon used to represent this todo */
  icon?: string;
  /**
   * The due date of the project
   */
  dueDate?: firestore.Timestamp;
  /**
   * The list of todos assigned to this project as document references
   */
  todos?: DocumentReference[];
  /**
   * The list of todos assigned to this projecct which are marked as done
   */
  todosDone?: DocumentReference[];
}
