import React from "react";

export default function CourseForm(props) {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <div className="field">
          <input
            id="title"
            type="text"
            onChange={props.onTitleChange}
            name="title"
            className="form-control"
            value={props.course.title}
          />
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="author">Author</label>
        <div className="field">
          <select
            id="author"
            name="authorId"
            onChange={props.onChange}
            value={props.course.authorId || ""}
            className="form-control"
          >
            <option value="" />
            <option value="1">Deepak </option>
            <option value="2">David </option>
          </select>
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="category">Category</label>
        <div className="field">
          <select
            type="text"
            id="category"
            name="category"
            className="form-control"
            value={props.course.category}
          />
        </div>
      </div>

      <input type="submit" value="save" className="btn btn-primary" />
    </form>
  );
}
