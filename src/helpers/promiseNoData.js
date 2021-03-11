export default function promiseNoData(loading, data, error) {
  return (
    (loading && (
      <img src="http://www.csc.kth.se/~cristi/loading.gif" alt="Loading..." />
    )) ||
    (error && <p>{error}</p>) ||
    (!data && "Unable to get data :(")
  );
}
