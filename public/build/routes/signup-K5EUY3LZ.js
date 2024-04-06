import {
  inputSignUpFormLabels,
  require_node,
  signUpSchema,
  useRemixForm
} from "/build/_shared/chunk-TAZ4JTOU.js";
import {
  Form,
  useNavigate
} from "/build/_shared/chunk-5SW5NLFA.js";
import "/build/_shared/chunk-GIAAE3CH.js";
import {
  t
} from "/build/_shared/chunk-ANTLN4AJ.js";
import {
  createHotContext
} from "/build/_shared/chunk-XDDQK4IM.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import "/build/_shared/chunk-BOXFZXVX.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/signup/index.tsx
var import_node = __toESM(require_node(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\signup\\\\index.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\signup\\index.tsx"
  );
  import.meta.hot.lastModified = "1712313904276.0107";
}
var resolver = t(signUpSchema);
function SignUp() {
  _s();
  const navigation = useNavigate();
  const {
    register,
    formState: {
      isSubmitting,
      errors
    }
  } = useRemixForm({
    resolver,
    mode: "onBlur"
  });
  const FormInput = ({
    name,
    type
  }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { children: [
    inputSignUpFormLabels[name],
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type, ...register(name) }, void 0, false, {
      fileName: "app/routes/signup/index.tsx",
      lineNumber: 67,
      columnNumber: 7
    }, this),
    errors[name] && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: `${errors[name]?.message}` }, void 0, false, {
      fileName: "app/routes/signup/index.tsx",
      lineNumber: 68,
      columnNumber: 24
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/signup/index.tsx",
    lineNumber: 65,
    columnNumber: 9
  }, this);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "POST", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormInput, { name: "email", type: "email" }, void 0, false, {
      fileName: "app/routes/signup/index.tsx",
      lineNumber: 71,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormInput, { name: "password", type: "password" }, void 0, false, {
      fileName: "app/routes/signup/index.tsx",
      lineNumber: 72,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormInput, { name: "confirmPassword", type: "password" }, void 0, false, {
      fileName: "app/routes/signup/index.tsx",
      lineNumber: 73,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", disabled: isSubmitting, children: "\u0413\u043E\u0442\u043E\u0432\u043E" }, void 0, false, {
      fileName: "app/routes/signup/index.tsx",
      lineNumber: 74,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", onClick: () => navigation(-1), children: "\u041D\u0430\u0437\u0430\u0434" }, void 0, false, {
      fileName: "app/routes/signup/index.tsx",
      lineNumber: 77,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/signup/index.tsx",
    lineNumber: 70,
    columnNumber: 10
  }, this);
}
_s(SignUp, "jPrfFg8gMf17aDGenvQWhtzhtlI=", false, function() {
  return [useNavigate, useRemixForm];
});
_c = SignUp;
var _c;
$RefreshReg$(_c, "SignUp");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  SignUp as default
};
//# sourceMappingURL=/build/routes/signup-K5EUY3LZ.js.map
