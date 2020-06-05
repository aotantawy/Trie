import React from "react";
import styles from "./styles/send.module.css";

export default Send;

function Send() {
  function demo(e) {
    e.preventDefault();
  }

  return (
    <form
      action="#"
      className={styles["user-request"]}
      method="post"
      onSubmit={demo}
    >
      <div className="form-group">
        <label for="user-email" className={styles["labels"]}>
          Email address
        </label>
        <input
          className={`form-control ${styles["email"]}`}
          id="user-email"
          placeholder="E-mail"
          required
          type="email"
        />
      </div>

      <div className="form-group">
        <label for="user-full-name" className={styles["labels"]}>
          Full Name
        </label>
        <input
          className={`form-control ${styles["full-name"]}`}
          id="user-full-name"
          placeholder="Full Name"
          required
          type="text"
        />
      </div>

      <div className="form-group">
        <label for="user-title" className={styles["labels"]}>
          Title
        </label>
        <input
          autoComplete="off"
          className={`form-control ${styles["title"]}`}
          id="user-title"
          placeholder="Title"
          required
          type="text"
        />
      </div>

      <div className="form-group">
        <label for="user-description" className={styles["labels"]}>
          description
        </label>
        <textarea
          className={`form-control ${styles["description"]}`}
          id="user-description"
          placeholder="description"
          rows="3"
        ></textarea>
      </div>

      <button
        className={`btn btn-outline-light ${styles["submit-button"]}`}
        type="submit"
      >
        Submit
      </button>
    </form>
  );
}