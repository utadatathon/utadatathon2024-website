import React, { useEffect, useState, useLayoutEffect, Fragment } from "react";
import { Field, ErrorMessage } from "formik";

/**
 *Text input question Component
 *
 *
 */
function Question(props) {
  if (props.type === "text") {
    return (
      <Fragment>
        <label htmlFor={props.question.id} className="mt-4 py-2">
          {props.question.required ? "*" : ""}
          {props.question.question}
        </label>
        <Field
          id={props.question.id}
          name={props.question.name}
          className="border border-complementary/20 rounded-md md:p-2 p-1 text-black "
        />
        <ErrorMessage
          name={props.question.name}
          render={(msg) => <div className="text-red-600 py-2">{msg}</div>}
        />
      </Fragment>
    );
  } else if (props.type === "number") {
    return (
      <Fragment key={props.question.id}>
        <label htmlFor={props.question.id} className="mt-4 py-2">
          {props.question.required ? "*" : ""}
          {props.question.question}
        </label>
        <input
          id={props.question.id}
          className="border border-complementary/20 rounded-md md:p-2 p-1 text-black"
          name={props.question.name}
          type="number"
          min={props.question.min}
          max={props.question.max}
          pattern={props.question.pattern}
          onChange={props.onChange}
          value={props.value}
        />
        <ErrorMessage
          name={props.question.name}
          render={(msg) => <div className="text-red-600">{msg}</div>}
        />
      </Fragment>
    );
  } else if (props.type === "dropdown") {
    return (
      <Fragment>
        <label htmlFor={props.question.id} className="mt-4 py-2 ">
          {props.question.required ? "*" : ""}
          {props.question.question}
        </label>
        <Field
          as="select"
          name={props.question.name}
          id={props.question.id}
          className="border border-complementary/20 rounded-md md:pl-2 md:py-2 pl-1 py-1 w-min text-sm sm:text-base text-black "
        >
          <option value="" disabled selected></option>
          {props.question.options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.title}
            </option>
          ))}
        </Field>
        <ErrorMessage
          name={props.question.name}
          render={(msg) => <div className="text-red-600">{msg}</div>}
        />
      </Fragment>
    );
  } else if (props.type === "checkbox") {
    return (
      <Fragment>
        <label htmlFor={props.question.name} className="mt-4 py-2">
          {props.question.required ? "*" : ""}
          {props.question.question}
        </label>
        <div
          role="group"
          aria-labelledby="checkbox-group"
          className="flex flex-col"
        >
          {props.question.options.map((option) => (
            <label key={option.value}>
              <Field
                type="checkbox"
                name={props.question.name}
                value={option.value}
              />
              &nbsp;
              {option.title
                .split(
                  /(MLH Privacy Policy|MLH Code of Conduct|MLH Contest Terms and Conditions)/
                )
                .map((part, index) => (
                  <React.Fragment key={index}>
                    {(part === "MLH Privacy Policy" && (
                      <a
                        href="https://mlh.io/privacy"
                        style={{ textDecoration: "underline" }}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {part}
                      </a>
                    )) ||
                      (part === "MLH Code of Conduct" && (
                        <a
                          href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf"
                          style={{ textDecoration: "underline" }}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {part}
                        </a>
                      )) ||
                      (part === "MLH Contest Terms and Conditions" && (
                        <a
                          href="https://github.com/MLH/mlh-policies/blob/main/contest-terms.md"
                          style={{ textDecoration: "underline" }}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {part}
                        </a>
                      )) ||
                      part}
                  </React.Fragment>
                ))}
            </label>
          ))}
        </div>
        <ErrorMessage
          name={props.question.name}
          render={(msg) => <div className="text-red-600">{msg}</div>}
        />
      </Fragment>
    );
  } else if (props.type === "datalist") {
    return (
      <Fragment>
        <label htmlFor={props.question.name} className="mt-4 py-2">
          {props.question.required ? "*" : ""}
          {props.question.question}
        </label>
        <Field
          type="text"
          id={props.question.id}
          name={props.question.name}
          list={props.question.datalist}
          className="border border-complementary/20 rounded-md md:p-2 p-1 text-black"
          autoComplete="off"
        ></Field>
        <datalist id={props.question.datalist}>
          <option value="" disabled selected></option>
          {props.question.options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.title}
            </option>
          ))}
        </datalist>
        <ErrorMessage
          name={props.question.name}
          render={(msg) => <div className="text-red-600">{msg}</div>}
        />
      </Fragment>
    );
  } else if (props.type === "textArea") {
    return (
      <Fragment>
        <label htmlFor={props.question.name} className="mt-4 py-2">
          {props.question.required ? "*" : ""}
          {props.question.question}
        </label>
        <Field
          as="textarea"
          name={props.question.name}
          placeholder={props.question.placeholder}
          className="border border-complementary/20 rounded-md md:p-2 p-1 text-black"
        ></Field>
        <ErrorMessage
          name={props.question.name}
          render={(msg) => <div className="text-red-600">{msg}</div>}
        />
      </Fragment>
    );
  }
}

export default Question;
