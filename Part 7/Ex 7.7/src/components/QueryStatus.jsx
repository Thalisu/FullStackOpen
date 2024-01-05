import PropTypes from "prop-types";

const QueryStatus = ({ status }) => {
  return (
    <>
      {status.isLoading && (
        <h4>
          fetching countries data, You can still try to search for countries but
          only by their exact names
        </h4>
      )}
      {status.isError && (
        <h4>
          an error occurred when fetching countries data, some application
          features may not work
        </h4>
      )}
    </>
  );
};

export default QueryStatus;
QueryStatus.propTypes = {
  status: PropTypes.object.isRequired,
};
