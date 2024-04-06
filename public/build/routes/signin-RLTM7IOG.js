import {
  inputSignInFormLabels,
  require_node,
  signInSchema,
  useRemixForm
} from "/build/_shared/chunk-TAZ4JTOU.js";
import {
  Form,
  useActionData,
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
  __commonJS,
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// empty-module:~/utils/request.server
var require_request = __commonJS({
  "empty-module:~/utils/request.server"(exports, module) {
    module.exports = {};
  }
});

// app/routes/signin/index.tsx
var import_node = __toESM(require_node(), 1);
var import_request = __toESM(require_request(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\signin\\\\index.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\signin\\index.tsx"
  );
  import.meta.hot.lastModified = "1712319876326.1135";
}
var resolver = t(signInSchema);
function SignIn() {
  _s();
  const actionData = useActionData();
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
    inputSignInFormLabels[name],
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type, ...register(name) }, void 0, false, {
      fileName: "app/routes/signin/index.tsx",
      lineNumber: 76,
      columnNumber: 7
    }, this),
    errors[name] && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: `${errors[name]?.message}` }, void 0, false, {
      fileName: "app/routes/signin/index.tsx",
      lineNumber: 77,
      columnNumber: 24
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/signin/index.tsx",
    lineNumber: 74,
    columnNumber: 9
  }, this);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "POST", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormInput, { name: "email", type: "email" }, void 0, false, {
      fileName: "app/routes/signin/index.tsx",
      lineNumber: 80,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormInput, { name: "password", type: "password" }, void 0, false, {
      fileName: "app/routes/signin/index.tsx",
      lineNumber: 81,
      columnNumber: 7
    }, this),
    actionData?.formError && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: actionData.formError }, void 0, false, {
      fileName: "app/routes/signin/index.tsx",
      lineNumber: 82,
      columnNumber: 33
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", disabled: isSubmitting, children: "\u0412\u043E\u0439\u0442\u0438" }, void 0, false, {
      fileName: "app/routes/signin/index.tsx",
      lineNumber: 83,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", onClick: () => navigation("/signup"), children: "\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C\u0441\u044F" }, void 0, false, {
      fileName: "app/routes/signin/index.tsx",
      lineNumber: 86,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/signin/index.tsx",
    lineNumber: 79,
    columnNumber: 10
  }, this);
}
_s(SignIn, "TY2ZkXPEd6Qm83ttuQrcexrIG84=", false, function() {
  return [useActionData, useNavigate, useRemixForm];
});
_c = SignIn;
var _c;
$RefreshReg$(_c, "SignIn");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  SignIn as default
};
//# sourceMappingURL=/build/routes/signin-RLTM7IOG.js.map
