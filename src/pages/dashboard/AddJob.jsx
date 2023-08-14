import React, { useEffect } from "react";
import { FormRow, FormRowSelect } from "../../components";
import Wrapper from "../../assets/wrappers/DashboardFormPage";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import {
  clearValues,
  handelChange,
  createJob,
  editJob,
} from "../../features/Job/jobSlice";

const AddJob = () => {
  const {
    isLoading,
    position,
    company,
    jobLocation,
    jobType,
    jobTypeOptions,
    status,
    statusOptions,
    isEditing,
    editJobId,
  } = useSelector((store) => store.job);

  const { user } = useSelector((store) => store.user);

  const dispatch = useDispatch();

  const handelSubmit = (e) => {
    e.preventDefault();

    if (!position || !company || !jobLocation) {
      toast.error("Please Fill Out All Fields");
      return;
    }
    if (isEditing) {
      dispatch(
        editJob({
          jobId: editJobId,
          job: { position, company, status, jobLocation, jobType },
        })
      );
      return;
    }
    dispatch(createJob({ position, company, jobLocation, jobType, status }));
  };

  const handelJobInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    dispatch(handelChange({ name, value }));
  };

  useEffect(() => {
    if (!isEditing) {
      dispatch(
        handelChange({
          name: "jobLocation",
          value: user.location,
        })
      );
    }
  }, []);
  return (
    <Wrapper>
      <form className="form">
        <h3>{isEditing ? "edit job" : "add job"}</h3>
        <div className="form-center">
          {/* Position */}
          <FormRow
            type="text"
            name="position"
            value={position}
            handleChange={handelJobInput}
          />

          {/* company */}
          <FormRow
            type="text"
            name="company"
            value={company}
            handleChange={handelJobInput}
          />

          {/* jobLocation */}
          <FormRow
            type="text"
            name="jobLocation"
            labelText="Job Location"
            value={jobLocation}
            handleChange={handelJobInput}
          />

          {/* status */}
          <FormRowSelect
            name="status"
            value={status}
            handelChange={handelJobInput}
            list={statusOptions}
          />

          {/* Job type */}
          <FormRowSelect
            name="jobType"
            labelText="job Type"
            value={jobType}
            handelChange={handelJobInput}
            list={jobTypeOptions}
          />

          <div className="btn-container">
            <button
              type="button"
              className="btn btn-block clear-btn"
              onClick={() => dispatch(clearValues())}
            >
              clear
            </button>

            <button
              type="submit"
              className="btn btn-block submit-btn"
              onClick={handelSubmit}
              disabled={isLoading}
            >
              submit
            </button>
          </div>
        </div>
      </form>
    </Wrapper>
  );
};

export default AddJob;
