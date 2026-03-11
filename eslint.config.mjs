import pluginSecurity from "eslint-plugin-security";
import tseslint from "typescript-eslint";

export default [
  {
    ignores: ["dist/"],
  },
  ...tseslint.configs.recommended,
  pluginSecurity.configs.recommended, // هذا السطر هو من سيصطاد التحذيرات
];
