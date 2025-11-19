export default function Form({ formData, handleChange, handleSubmit }) {
  return (
    <form onSubmit={handleSubmit}>
      <div className="row mb-3">
        <label
          htmlFor="author"
          className="col-sm-2 col-form-label vd-text-label"
        >
          Author
        </label>
        <div className="col-sm-10">
          <input
            type="text"
            className="form-control"
            id="author"
            name="author"
            value={formData.author}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="row mb-3">
        <label
          htmlFor="title"
          className="col-sm-2 col-form-label vd-text-label"
        >
          Title
        </label>
        <div className="col-sm-10">
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="row mb-5">
        <label htmlFor="body" className="col-sm-2 col-form-label vd-text-label">
          Body of the post
        </label>
        <div className="col-sm-10">
          <textarea
            type="text"
            className="form-control"
            id="body"
            rows="3"
            name="body"
            value={formData.body}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="form-check mb-5">
        <input
          type="checkbox"
          className="form-check-input"
          id="public"
          name="public"
          checked={formData.public}
          onChange={handleChange}
        />
        <label className="form-check-label vd-text-label" htmlFor="public">
          Make this post public
        </label>
      </div>
      <button type="submit" className="btn btn-primary vd-btn">
        Submit
      </button>
    </form>
  );
}
