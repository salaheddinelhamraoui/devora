const RedirectPage = () => {
  return <div>Redirecting...</div>;
};

export const getServerSideProps = async () => {
  return {
    redirect: {
      destination: "/contact",
      permanent: false,
    },
  };
};

export default RedirectPage;
