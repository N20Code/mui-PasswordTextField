# MUI-PasswordTextField

> A package that enhances the MUI Text Field by adding a visibility button allowing users to have the values in a password text field visible or invisible.

## Installation

```bash
npm install mui-passwordtextfield
```

or

```bash
yarn add mui-passwordtextfield
```

## Usage

```js
import PasswordTextField from 'mui-passwordtextfield';

const App = () => {
  return <PasswordTextField />;
};

export default App;
```

## API

### `PasswordTextField` Element

| **Name**        | **Type**        | **Description**                                                                 |
| --------------- | --------------- | ------------------------------------------------------------------------------- |
| iconButtonProps | IconButtonProps | Uses MUI Icon Button Props [here](https://mui.com/material-ui/api/icon-button/) |
| InputProps      | InputProps      | To change the properties of the input                                           |

### InputProps

| **Name**             | **Type**         | **Description**                                                          |
| -------------------- | ---------------- | ------------------------------------------------------------------------ |
| withToggleVisibility | React Elemet     | Appears on the left of the Toggle Visibility Button                      |
| -Continue-           | MUI's InputProps | Uses MUI Input Props [here](https://mui.com/material-ui/api/text-field/) |

## License

The files included in this repository are licensed under the MIT license.
