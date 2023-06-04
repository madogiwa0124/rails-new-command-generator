import type { Option } from "../../types/rails";

const ASSET_PIPELINE_OPTIONS = ["sprockets", "propshaft"] as const;
const JAVASCRIPT_APPROACH_OPTIONS = ["importmap", "webpack", "esbuild", "rollup"] as const;
const CSS_PROCESSOR_OPTIONS = ["tailwind", "bootstrap", "bulma", "postcss", "sass"] as const;
const DATABASE_OPTIONS = [
  "mysql",
  "postgresql",
  "sqlite3",
  "oracle",
  "sqlserver",
  "jdbcmysql",
  "jdbcsqlite3",
  "jdbcpostgresql",
  "jdbc",
] as const;

export const textOptions: Option<string>[] = [
  {
    value: "",
    commandText: "--database",
    description:
      "Preconfigure for selected database (options: mysql/postgresql/sqlite3/oracle/sqlserver/jdbcmysql/jdbcsqlite3/jdbcpostgresql/jdbc",
    choices: ["", ...DATABASE_OPTIONS] as string[],
  },
  {
    value: "",
    commandText: "--asset-pipeline",
    description: "Choose your asset pipeline [options: sprockets (default), propshaft]",
    choices: ["", ...ASSET_PIPELINE_OPTIONS] as string[],
  },
  {
    value: "",
    commandText: "--javascript",
    description: "Choose JavaScript approach [options: importmap (default), webpack, esbuild, rollup]",
    choices: ["", ...JAVASCRIPT_APPROACH_OPTIONS] as string[],
  },
  {
    value: "",
    commandText: "--css",
    description:
      "Choose CSS processor [options: tailwind, bootstrap, bulma, postcss, sass] check https://github.com/rails/cssbundling-rails",
    choices: ["", ...CSS_PROCESSOR_OPTIONS] as string[],
  },
];

export const boolOptions: Option<boolean>[] = [
  {
    value: false,
    commandText: "--skip-namespace",
    description: "Skip namespace (affects only isolated engines)",
  },
  {
    value: false,
    commandText: "--skip-collision-check",
    description: "Skip collision check",
  },
  {
    value: false,
    commandText: "--skip-git",
    description: "Skip .gitignore file",
  },
  {
    value: false,
    commandText: "--skip-keeps",
    description: "Skip source control .keep files",
  },
  {
    value: false,
    commandText: "--skip-action-mailer",
    description: "Skip Action Mailer files",
  },
  {
    value: false,
    commandText: "--skip-action-mailbox",
    description: "Skip Action Mailbox gem",
  },
  {
    value: false,
    commandText: "--skip-action-text",
    description: "Skip Action Text gem",
  },
  {
    value: false,
    commandText: "--skip-active-record",
    description: "Skip Active Record files",
  },
  {
    value: false,
    commandText: "--skip-active-job",
    description: "Skip Active Job",
  },
  {
    value: false,
    commandText: "--skip-active-storage",
    description: "Skip Active Storage files",
  },
  {
    value: false,
    commandText: "--skip-action-cable",
    description: "Skip Action Cable files",
  },
  {
    value: false,
    commandText: "--skip-asset-pipeline",
    description: "Indicates when to generate skip asset pipeline",
  },
  {
    value: false,
    commandText: "--skip-javascript",
    description: "Skip JavaScript files",
  },
  {
    value: false,
    commandText: "--skip-hotwire",
    description: "Skip Hotwire integration",
  },
  {
    value: false,
    commandText: "--skip-jbuilder",
    description: "Skip jbuilder gem",
  },
  {
    value: false,
    commandText: "--skip-test",
    description: "Skip test files",
  },
  {
    value: false,
    commandText: "--skip-system-test",
    description: "Skip system test files",
  },
  {
    value: false,
    commandText: "--skip-bootsnap",
    description: "Skip bootsnap gem",
  },
  {
    value: false,
    commandText: "--api",
    description: "Preconfigure smaller stack for API only apps",
  },
  {
    value: false,
    commandText: "--minimal",
    description: "Preconfigure smaller stack for API only apps",
  },
  {
    value: false,
    commandText: "--skip-bundle",
    description: "Don't run bundle install",
  },
];

export const joinTextOptions = (textOptions: Option<string>[]) => {
  return textOptions.reduce((result, option) => result + ` ${option.commandText}=${option.value}`, "");
};

export const joinBoolOptions = (boolOptions: Option<boolean>[]) => {
  const commands = boolOptions.map((option) => option.commandText);
  return commands.length ? ` ${commands.join(" ")}` : "";
};
