import {
  t,
  useForm,
  z
} from "/build/_shared/chunk-ANTLN4AJ.js";
import {
  createHotContext
} from "/build/_shared/chunk-XDDQK4IM.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  require_react
} from "/build/_shared/chunk-BOXFZXVX.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// contracts/anketa/slides/slide1.ts
var slide1Schema = z.object({
  firstName: z.string().min(2),
  // Имя
  lastName: z.string().min(2)
  // Фамилия
});

// contracts/anketa/slides/slide2.ts
var slide2Schema = z.object({
  phone: z.string()
  // Телефон
});

// contracts/anketa/slides/slide3.ts
var slide3Schema = z.object({
  workplace: z.string(),
  // Место работы
  position: z.string()
  // Должность
});

// contracts/anketa/slides/slide4.ts
var experienceEnumSchema = z.enum([
  "no_experience",
  "1_year",
  "3_years",
  "5_years",
  "other"
]);
var slide4Schema = z.object({
  workExperience: experienceEnumSchema
  // Опыт работы
});

// contracts/anketa/slides/slide5.ts
var directionEnum = z.array(z.enum([
  "backend",
  "frontend",
  "mobile",
  "qa",
  "ml",
  "other"
]));
var slide5Schema = z.object({
  direction: directionEnum
  // Направление
});

// contracts/anketa/slides/slide6.ts
var participationFormatEnumSchema = z.enum(["online", "offline"]);
var slide6Schema = z.object({
  participationFormat: participationFormatEnumSchema
  // Формат участия
});

// contracts/anketa/slides/slide7.ts
var slide7Schema = z.object({
  consentToDataProcessing: z.literal(true),
  // Согласие на обработку данных
  consentToSendResume: z.boolean().optional()
  // Согласие на передачу резюме
});

// contracts/anketa/anketa.ts
var anketaFormSchema = slide1Schema.merge(slide2Schema).merge(slide3Schema).merge(slide4Schema).merge(slide5Schema).merge(slide6Schema).merge(slide7Schema);
function isAnketaSlideKey(slide) {
  return slide in anketaSlideFields;
}
var anketaSlideFields = {
  Slide1: Object.keys(slide1Schema.shape),
  Slide2: Object.keys(slide2Schema.shape),
  Slide3: Object.keys(slide3Schema.shape),
  Slide4: Object.keys(slide4Schema.shape),
  Slide5: Object.keys(slide5Schema.shape),
  Slide6: Object.keys(slide6Schema.shape),
  Slide7: Object.keys(slide7Schema.shape)
};
var InputAnketaLabels = /* @__PURE__ */ ((InputAnketaLabels2) => {
  InputAnketaLabels2["firstName"] = "\u0418\u043C\u044F*";
  InputAnketaLabels2["lastName"] = "\u0424\u0430\u043C\u0438\u043B\u0438\u044F*";
  InputAnketaLabels2["phone"] = "\u0422\u0435\u043B\u0435\u0444\u043E\u043D*";
  InputAnketaLabels2["workplace"] = "\u041C\u0435\u0441\u0442\u043E \u0440\u0430\u0431\u043E\u0442\u044B*";
  InputAnketaLabels2["position"] = "\u0414\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u044C*";
  return InputAnketaLabels2;
})(InputAnketaLabels || {});

// contracts/anketa/options.ts
var experienceOptions = [
  { value: "no_experience", label: "\u041D\u0435\u0442 \u043E\u043F\u044B\u0442\u0430" },
  { value: "1_year", label: "\u041E\u0442 1 \u0433\u043E\u0434\u0430" },
  { value: "3_years", label: "\u041E\u0442 3 \u043B\u0435\u0442" },
  { value: "5_years", label: "\u041E\u0442 5 \u043B\u0435\u0442" },
  { value: "other", label: "\u0414\u0440\u0443\u0433\u043E\u0435" }
];
var participationFormatOptions = [
  { value: "online", label: "\u041E\u043D\u043B\u0430\u0439\u043D" },
  { value: "offline", label: "\u041E\u0444\u043B\u0430\u0439\u043D" }
];
var directionOptions = [
  { value: "backend", label: "Backend" },
  { value: "frontend", label: "Frontend" },
  { value: "mobile", label: "Mobile" },
  { value: "qa", label: "QA" },
  { value: "ml", label: "ML" },
  { value: "other", label: "\u0414\u0440\u0443\u0433\u043E\u0435" }
];
var radioOptions = {
  workExperience: experienceOptions,
  participationFormat: participationFormatOptions
};
var checkOptions = {
  direction: directionOptions
};

// app/components/Anketa/Anketa.tsx
var import_react = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\Anketa\\\\Anketa.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\Anketa\\Anketa.tsx"
  );
  import.meta.hot.lastModified = "1712256662873.162";
}
function AnketaForm() {
  _s();
  const slidesCount = Object.keys(anketaSlideFields).length;
  const {
    trigger,
    handleSubmit,
    register,
    formState: {
      isSubmitting,
      errors
    }
  } = useForm({
    resolver: t(anketaFormSchema),
    mode: "onBlur"
  });
  const onSubmit = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 1e3));
    console.log(data);
  };
  const [count, setCount] = (0, import_react.useState)(0);
  const increment = async () => {
    const slide = `Slide${count}`;
    if (isAnketaSlideKey(slide)) {
      const fields = anketaSlideFields[slide];
      const isCurrentSlideValid = await trigger(fields);
      if (isCurrentSlideValid) {
        setCount((prev) => prev + 1);
      }
    } else {
      setCount((prev) => prev + 1);
    }
  };
  const decrement = () => setCount((prev) => --prev);
  const FormInput = ({
    name
  }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { children: [
    InputAnketaLabels[name],
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", ...register(name) }, void 0, false, {
      fileName: "app/components/Anketa/Anketa.tsx",
      lineNumber: 64,
      columnNumber: 7
    }, this),
    errors[name] && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: `${errors[name]?.message}` }, void 0, false, {
      fileName: "app/components/Anketa/Anketa.tsx",
      lineNumber: 65,
      columnNumber: 24
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Anketa/Anketa.tsx",
    lineNumber: 62,
    columnNumber: 9
  }, this);
  const FormRadio = ({
    name
  }) => {
    const options = radioOptions[name];
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("fieldset", { children: [
      options.map((option, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "radio", value: option.value, ...register(name) }, void 0, false, {
          fileName: "app/components/Anketa/Anketa.tsx",
          lineNumber: 73,
          columnNumber: 13
        }, this),
        option.label
      ] }, index, true, {
        fileName: "app/components/Anketa/Anketa.tsx",
        lineNumber: 72,
        columnNumber: 41
      }, this)),
      errors[name] && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: `${errors[name]?.message}` }, void 0, false, {
        fileName: "app/components/Anketa/Anketa.tsx",
        lineNumber: 76,
        columnNumber: 26
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Anketa/Anketa.tsx",
      lineNumber: 71,
      columnNumber: 12
    }, this);
  };
  const FormCheckbox = ({
    name
  }) => {
    const options = checkOptions[name];
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("fieldset", { children: [
      options.map((option, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "checkbox", value: option.value, ...register(name) }, void 0, false, {
          fileName: "app/components/Anketa/Anketa.tsx",
          lineNumber: 85,
          columnNumber: 13
        }, this),
        option.label
      ] }, index, true, {
        fileName: "app/components/Anketa/Anketa.tsx",
        lineNumber: 84,
        columnNumber: 41
      }, this)),
      errors[name] && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: `${errors[name]?.message}` }, void 0, false, {
        fileName: "app/components/Anketa/Anketa.tsx",
        lineNumber: 88,
        columnNumber: 26
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Anketa/Anketa.tsx",
      lineNumber: 83,
      columnNumber: 12
    }, this);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    "form",
    {
      onSubmit: handleSubmit(onSubmit),
      children: [
        count === 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { children: "\u041E\u0441\u0442\u0430\u043B\u0441\u044F \u0435\u0449\u0451 \u043E\u0434\u0438\u043D \u0448\u0430\u0433 \u2014 \u0437\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u044C \u0430\u043D\u043A\u0435\u0442\u0443" }, void 0, false, {
            fileName: "app/components/Anketa/Anketa.tsx",
            lineNumber: 96,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "\u042D\u0442\u0438 \u0434\u0430\u043D\u043D\u044B\u0435 \u043F\u043E\u043C\u043E\u0433\u0443\u0442 \u043D\u0430\u043C \u0438\u0434\u0435\u043D\u0442\u0438\u0444\u0438\u0446\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0432\u0430\u0441 \u043D\u0430 \u043C\u0435\u0440\u043E\u043F\u0440\u0438\u044F\u0442\u0438\u0438 \u0438 \u0432\u0430\u043C \u043D\u0435 \u043D\u0443\u0436\u043D\u043E \u0431\u0443\u0434\u0435\u0442 \u0437\u0430\u043F\u043E\u043B\u043D\u044F\u0442\u044C \u044D\u0442\u0443 \u0430\u043D\u043A\u0435\u0442\u0443 \u0435\u0449\u0451 \u0440\u0430\u0437" }, void 0, false, {
            fileName: "app/components/Anketa/Anketa.tsx",
            lineNumber: 97,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/Anketa/Anketa.tsx",
          lineNumber: 95,
          columnNumber: 25
        }, this),
        count === 1 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { children: "\u041A\u0430\u043A \u0432\u0430\u0441 \u0437\u043E\u0432\u0443\u0442?" }, void 0, false, {
            fileName: "app/components/Anketa/Anketa.tsx",
            lineNumber: 103,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormInput, { name: "firstName" }, void 0, false, {
            fileName: "app/components/Anketa/Anketa.tsx",
            lineNumber: 104,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormInput, { name: "lastName" }, void 0, false, {
            fileName: "app/components/Anketa/Anketa.tsx",
            lineNumber: 105,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/Anketa/Anketa.tsx",
          lineNumber: 102,
          columnNumber: 25
        }, this),
        count === 2 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { children: "\u041A\u0430\u043A \u043C\u043E\u0436\u043D\u043E \u0441 \u0432\u0430\u043C\u0438 \u0441\u0432\u044F\u0437\u0430\u0442\u044C\u0441\u044F?" }, void 0, false, {
            fileName: "app/components/Anketa/Anketa.tsx",
            lineNumber: 108,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormInput, { name: "phone" }, void 0, false, {
            fileName: "app/components/Anketa/Anketa.tsx",
            lineNumber: 109,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/Anketa/Anketa.tsx",
          lineNumber: 107,
          columnNumber: 25
        }, this),
        count === 3 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { children: "\u041A\u0435\u043C \u0432\u044B \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442\u0435?" }, void 0, false, {
            fileName: "app/components/Anketa/Anketa.tsx",
            lineNumber: 112,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormInput, { name: "position" }, void 0, false, {
            fileName: "app/components/Anketa/Anketa.tsx",
            lineNumber: 113,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormInput, { name: "workplace" }, void 0, false, {
            fileName: "app/components/Anketa/Anketa.tsx",
            lineNumber: 114,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/Anketa/Anketa.tsx",
          lineNumber: 111,
          columnNumber: 25
        }, this),
        count === 4 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { children: "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0432\u0430\u0448 \u043E\u043F\u044B\u0442 \u0440\u0430\u0431\u043E\u0442\u044B" }, void 0, false, {
            fileName: "app/components/Anketa/Anketa.tsx",
            lineNumber: 117,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormRadio, { name: "workExperience" }, void 0, false, {
            fileName: "app/components/Anketa/Anketa.tsx",
            lineNumber: 118,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/Anketa/Anketa.tsx",
          lineNumber: 116,
          columnNumber: 25
        }, this),
        count === 5 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { children: "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0432\u0430\u0448\u0435 \u043D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435" }, void 0, false, {
            fileName: "app/components/Anketa/Anketa.tsx",
            lineNumber: 121,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormCheckbox, { name: "direction" }, void 0, false, {
            fileName: "app/components/Anketa/Anketa.tsx",
            lineNumber: 122,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/Anketa/Anketa.tsx",
          lineNumber: 120,
          columnNumber: 25
        }, this),
        count === 6 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { children: "\u0412 \u043A\u0430\u043A\u043E\u043C \u0444\u043E\u0440\u043C\u0430\u0442\u0435 \u0432\u044B \u0445\u043E\u0442\u0435\u043B\u0438 \u0431\u044B \u0443\u0447\u0430\u0441\u0442\u0432\u043E\u0432\u0430\u0442\u044C \u0432 \u043C\u0435\u0440\u043E\u043F\u0440\u0438\u044F\u0442\u0438\u044F\u0445" }, void 0, false, {
            fileName: "app/components/Anketa/Anketa.tsx",
            lineNumber: 125,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormRadio, { name: "participationFormat" }, void 0, false, {
            fileName: "app/components/Anketa/Anketa.tsx",
            lineNumber: 126,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/Anketa/Anketa.tsx",
          lineNumber: 124,
          columnNumber: 25
        }, this),
        count === 7 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { children: "\u0412\u0430\u0448\u0435 \u0441\u043E\u0433\u043B\u0430\u0441\u0438\u0435 \u043D\u0430 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0443 \u0434\u0430\u043D\u043D\u044B\u0445" }, void 0, false, {
            fileName: "app/components/Anketa/Anketa.tsx",
            lineNumber: 129,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "checkbox", ...register("consentToDataProcessing") }, void 0, false, {
              fileName: "app/components/Anketa/Anketa.tsx",
              lineNumber: 131,
              columnNumber: 15
            }, this),
            "\u042F \u0434\u0430\u044E \u0441\u0432\u043E\u0451 \u0441\u043E\u0433\u043B\u0430\u0441\u0438\u0435 \u043D\u0430 \u043F\u0435\u0440\u0435\u0434\u0430\u0447\u0443 \u0432 \u041E\u041E\u041E \xAB\u042F\u041D\u0414\u0415\u041A\u0421\xBB \u0430\u043D\u043A\u0435\u0442\u044B, \u0441\u043E\u0434\u0435\u0440\u0436\u0430\u0449\u0435\u0439 \u043C\u043E\u0438 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435, \u0438 \u0441\u043E\u0433\u043B\u0430\u0441\u0435\u043D \u0441 \u0442\u0435\u043C, \u0447\u0442\u043E \u043E\u043D\u0438 \u0431\u0443\u0434\u0443\u0442 \u0445\u0440\u0430\u043D\u0438\u0442\u044C\u0441\u044F \u0432 \u041E\u041E\u041E \xAB\u042F\u041D\u0414\u0415\u041A\u0421\xBB \u0432 \u0442\u0435\u0447\u0435\u043D\u0438\u0435 10 \u043B\u0435\u0442 \u0438 \u0431\u0443\u0434\u0443\u0442 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u044B \u0438\u0441\u043A\u043B\u044E\u0447\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0434\u043B\u044F \u0446\u0435\u043B\u0435\u0439 \u043F\u0440\u0438\u0433\u043B\u0430\u0448\u0435\u043D\u0438\u044F \u043C\u0435\u043D\u044F \u043A \u0443\u0447\u0430\u0441\u0442\u0438\u044E \u0432 \u043C\u0435\u0440\u043E\u043F\u0440\u0438\u044F\u0442\u0438\u044F\u0445 \u0433\u0440\u0443\u043F\u043F\u044B \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0439 \xAB\u042F\u041D\u0414\u0415\u041A\u0421\xBB, \u0432 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0438 \u0441 \u0424\u0435\u0434\u0435\u0440\u0430\u043B\u044C\u043D\u044B\u043C \u0437\u0430\u043A\u043E\u043D\u043E\u043C \xAB\u041E \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445\xBB."
          ] }, void 0, true, {
            fileName: "app/components/Anketa/Anketa.tsx",
            lineNumber: 130,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "checkbox", ...register("consentToSendResume") }, void 0, false, {
              fileName: "app/components/Anketa/Anketa.tsx",
              lineNumber: 141,
              columnNumber: 15
            }, this),
            "\u042F \u0434\u0430\u044E \u0441\u0432\u043E\u0451 \u0441\u043E\u0433\u043B\u0430\u0441\u0438\u0435 \u043D\u0430 \u043F\u0435\u0440\u0435\u0434\u0430\u0447\u0443 \u0432 \u041E\u041E\u041E \xAB\u042F\u041D\u0414\u0415\u041A\u0421\xBB \u0440\u0435\u0437\u044E\u043C\u0435 \u0438/\u0438\u043B\u0438 \u0430\u043D\u043A\u0435\u0442\u044B, \u0441\u043E\u0434\u0435\u0440\u0436\u0430\u0449\u0438\u0445 \u043C\u043E\u0438 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435, \u0438 \u0441\u043E\u0433\u043B\u0430\u0441\u0435\u043D \u0441 \u0442\u0435\u043C, \u0447\u0442\u043E \u043E\u043D\u0438 \u0431\u0443\u0434\u0443\u0442 \u0445\u0440\u0430\u043D\u0438\u0442\u044C\u0441\u044F \u0432 \u041E\u041E\u041E \xAB\u042F\u041D\u0414\u0415\u041A\u0421\xBB \u0432 \u0442\u0435\u0447\u0435\u043D\u0438\u0435 10 \u043B\u0435\u0442 \u0438 \u0431\u0443\u0434\u0443\u0442 \u043E\u0431\u0440\u0430\u0431\u0430\u0442\u044B\u0432\u0430\u0442\u044C\u0441\u044F \u0438\u0441\u043A\u043B\u044E\u0447\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0434\u043B\u044F \u0446\u0435\u043B\u0435\u0439 \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u044F \u043C\u043D\u0435 \u0432\u0430\u043A\u0430\u043D\u0441\u0438\u0439 \u0433\u0440\u0443\u043F\u043F\u044B \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0439 \xAB\u042F\u041D\u0414\u0415\u041A\u0421\xBB, \u0432 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0438 \u0441 \u0424\u0435\u0434\u0435\u0440\u0430\u043B\u044C\u043D\u044B\u043C \u0437\u0430\u043A\u043E\u043D\u043E\u043C \xAB\u041E \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445\xBB."
          ] }, void 0, true, {
            fileName: "app/components/Anketa/Anketa.tsx",
            lineNumber: 140,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/Anketa/Anketa.tsx",
          lineNumber: 128,
          columnNumber: 25
        }, this),
        count > 1 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", onClick: decrement, children: "\u041D\u0430\u0437\u0430\u0434" }, void 0, false, {
          fileName: "app/components/Anketa/Anketa.tsx",
          lineNumber: 150,
          columnNumber: 23
        }, this),
        count < slidesCount && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", onClick: increment, children: count === 0 ? "\u0417\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u044C \u0430\u043D\u043A\u0435\u0442\u0443" : "\u0414\u0430\u043B\u0435\u0435" }, void 0, false, {
          fileName: "app/components/Anketa/Anketa.tsx",
          lineNumber: 153,
          columnNumber: 33
        }, this),
        count === slidesCount && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { disabled: isSubmitting, type: "submit", children: "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C" }, void 0, false, {
          fileName: "app/components/Anketa/Anketa.tsx",
          lineNumber: 156,
          columnNumber: 35
        }, this)
      ]
    },
    void 0,
    true,
    {
      fileName: "app/components/Anketa/Anketa.tsx",
      lineNumber: 92,
      columnNumber: 7
    },
    this
  ) }, void 0, false, {
    fileName: "app/components/Anketa/Anketa.tsx",
    lineNumber: 91,
    columnNumber: 10
  }, this);
}
_s(AnketaForm, "uRBqrhXqPXVTCKnILnz5Dyeb9fA=", false, function() {
  return [useForm];
});
_c = AnketaForm;
var _c;
$RefreshReg$(_c, "AnketaForm");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/anketa/index.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\anketa\\\\index.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\anketa\\index.tsx"
  );
  import.meta.hot.lastModified = "1712231046092.7202";
}
function Anketa() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(AnketaForm, {}, void 0, false, {
    fileName: "app/routes/anketa/index.tsx",
    lineNumber: 23,
    columnNumber: 10
  }, this);
}
_c2 = Anketa;
var _c2;
$RefreshReg$(_c2, "Anketa");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Anketa as default
};
//# sourceMappingURL=/build/routes/anketa-K45JCXPM.js.map
