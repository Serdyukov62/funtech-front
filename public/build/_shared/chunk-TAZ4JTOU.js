import {
  useActionData,
  useNavigation,
  useSubmit
} from "/build/_shared/chunk-5SW5NLFA.js";
import {
  useForm,
  z
} from "/build/_shared/chunk-ANTLN4AJ.js";
import {
  require_react
} from "/build/_shared/chunk-BOXFZXVX.js";
import {
  __commonJS,
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// empty-module:@remix-run/node
var require_node = __commonJS({
  "empty-module:@remix-run/node"(exports, module) {
    module.exports = {};
  }
});

// contracts/sign/sign.ts
var signInSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8)
});
var signUpSchema = signInSchema.extend({
  confirmPassword: z.string()
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords must match",
  path: ["confirmPassword"]
});
var inputSignUpFormLabels = {
  email: "Email",
  confirmPassword: "\u041F\u0440\u0438\u0434\u0443\u043C\u0430\u0439\u0442\u0435 \u043F\u0430\u0440\u043E\u043B\u044C",
  password: "\u041F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u0435 \u043F\u0430\u0440\u043E\u043B\u044C"
};
var inputSignInFormLabels = {
  email: "Email",
  password: "\u041F\u0430\u0440\u043E\u043B\u044C"
};

// node_modules/remix-hook-form/dist/index.js
var import_react = __toESM(require_react(), 1);
var createFormData = (data, stringifyAll = true) => {
  const formData = new FormData();
  if (!data) {
    return formData;
  }
  Object.entries(data).map(([key, value]) => {
    if (value instanceof FileList) {
      for (let i = 0; i < value.length; i++) {
        formData.append(key, value[i]);
      }
      return;
    }
    if (value instanceof File || value instanceof Blob) {
      formData.append(key, value);
    } else {
      if (stringifyAll) {
        formData.append(key, JSON.stringify(value));
      } else {
        if (typeof value === "string") {
          formData.append(key, value);
        } else if (value instanceof Date) {
          formData.append(key, value.toISOString());
        } else {
          formData.append(key, JSON.stringify(value));
        }
      }
    }
  });
  return formData;
};
var useRemixForm = ({
  submitHandlers,
  submitConfig,
  submitData,
  fetcher,
  stringifyAllValues = true,
  ...formProps
}) => {
  var _a, _b;
  const [isSubmittedSuccessfully, setIsSubmittedSuccessfully] = import_react.default.useState(false);
  const actionSubmit = useSubmit();
  const actionData = useActionData();
  const submit = (_a = fetcher == null ? void 0 : fetcher.submit) != null ? _a : actionSubmit;
  const data = (_b = fetcher == null ? void 0 : fetcher.data) != null ? _b : actionData;
  const methods = useForm({ ...formProps, errors: data == null ? void 0 : data.errors });
  const navigation = useNavigation();
  const isSubmittingForm = (0, import_react.useMemo)(
    () => navigation.state !== "idle" && navigation.formData !== void 0 || fetcher && fetcher.state !== "idle" && fetcher.formData !== void 0,
    [navigation.state, navigation.formData, fetcher == null ? void 0 : fetcher.state, fetcher == null ? void 0 : fetcher.formData]
  );
  const onSubmit = (0, import_react.useMemo)(
    () => (data2) => {
      setIsSubmittedSuccessfully(true);
      const formData = createFormData(
        { ...data2, ...submitData },
        stringifyAllValues
      );
      submit(formData, {
        method: "post",
        ...submitConfig
      });
    },
    [submit, submitConfig, submitData, stringifyAllValues]
  );
  const onInvalid = (0, import_react.useMemo)(() => () => {
  }, []);
  const formState = (0, import_react.useMemo)(
    () => ({
      get isDirty() {
        return methods.formState.isDirty;
      },
      get isLoading() {
        return methods.formState.isLoading;
      },
      get isSubmitted() {
        return methods.formState.isSubmitted;
      },
      get isSubmitSuccessful() {
        return isSubmittedSuccessfully || methods.formState.isSubmitSuccessful;
      },
      get isSubmitting() {
        return isSubmittingForm || methods.formState.isSubmitting;
      },
      get isValidating() {
        return methods.formState.isValidating;
      },
      get isValid() {
        return methods.formState.isValid;
      },
      get disabled() {
        return methods.formState.disabled;
      },
      get submitCount() {
        return methods.formState.submitCount;
      },
      get defaultValues() {
        return methods.formState.defaultValues;
      },
      get dirtyFields() {
        return methods.formState.dirtyFields;
      },
      get touchedFields() {
        return methods.formState.touchedFields;
      },
      get validatingFields() {
        return methods.formState.validatingFields;
      },
      get errors() {
        return methods.formState.errors;
      }
    }),
    [methods.formState, isSubmittedSuccessfully, isSubmittingForm]
  );
  const reset = (0, import_react.useMemo)(
    () => (values, options) => {
      setIsSubmittedSuccessfully(false);
      methods.reset(values, options);
    },
    [methods.reset]
  );
  const register = (0, import_react.useMemo)(
    () => (name, options) => {
      var _a2, _b2;
      return {
        ...methods.register(name, options),
        ...!(options == null ? void 0 : options.disableProgressiveEnhancement) && {
          defaultValue: (_b2 = (_a2 = data == null ? void 0 : data.defaultValues) == null ? void 0 : _a2[name]) != null ? _b2 : ""
        }
      };
    },
    [methods.register, data == null ? void 0 : data.defaultValues]
  );
  const handleSubmit = (0, import_react.useMemo)(
    () => {
      var _a2, _b2;
      return methods.handleSubmit(
        (_a2 = submitHandlers == null ? void 0 : submitHandlers.onValid) != null ? _a2 : onSubmit,
        (_b2 = submitHandlers == null ? void 0 : submitHandlers.onInvalid) != null ? _b2 : onInvalid
      );
    },
    [methods.handleSubmit, submitHandlers, onSubmit, onInvalid]
  );
  const hookReturn = (0, import_react.useMemo)(
    () => ({
      ...methods,
      handleSubmit,
      reset,
      register,
      formState
    }),
    [methods, handleSubmit, reset, register, formState]
  );
  return hookReturn;
};

export {
  require_node,
  signInSchema,
  signUpSchema,
  inputSignUpFormLabels,
  inputSignInFormLabels,
  useRemixForm
};
//# sourceMappingURL=/build/_shared/chunk-TAZ4JTOU.js.map
