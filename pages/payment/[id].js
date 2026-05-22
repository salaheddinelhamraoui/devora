// app/page/[id].js or app/page/[id].tsx

const RedirectPage = () => {
  return <div>Redirecting...</div>;
};

export const getServerSideProps = async ({ params, req }) => {
  const { id } = params;

  // Log both referrer and origin for debugging
  console.log("Referrer:", req.headers.referer);
  console.log("Origin:", req.headers.origin); // Log the Origin header

  // Define your mapping logic for redirection
  const redirectMap = {
    1: "https://wa.me/message/ECIODZL22YNMH1",
    2: "https://wa.me/message/ECIODZL22YNMH1",
    3: "https://wa.me/message/ECIODZL22YNMH1",
    4: "https://wa.me/message/ECIODZL22YNMH1",
    5: "https://wa.me/message/ECIODZL22YNMH1",
    6: "https://wa.me/message/ECIODZL22YNMH1",
    7: "https://wa.me/message/ECIODZL22YNMH1",
    8: "https://wa.me/message/ECIODZL22YNMH1",
    9: "https://wa.me/message/ECIODZL22YNMH1",
    10: "https://wa.me/message/ECIODZL22YNMH1",
    11: "https://wa.me/message/ECIODZL22YNMH1",
    12: "https://wa.me/message/ECIODZL22YNMH1",
    13: "https://wa.me/message/ECIODZL22YNMH1",
    14: "https://wa.me/message/ECIODZL22YNMH1",
    15: "https://wa.me/message/ECIODZL22YNMH1",
    16: "https://wa.me/message/ECIODZL22YNMH1",
    17: "https://wa.me/message/ECIODZL22YNMH1",
    18: "https://wa.me/message/ECIODZL22YNMH1",
    19: "https://wa.me/message/ECIODZL22YNMH1",
    20: "https://wa.me/message/ECIODZL22YNMH1",
    21: "https://wa.me/message/ECIODZL22YNMH1",
    22: "https://wa.me/message/ECIODZL22YNMH1",
    23: "https://wa.me/message/ECIODZL22YNMH1",
    24: "https://wa.me/message/ECIODZL22YNMH1",
  };

  const destination = redirectMap[id];

  if (destination) {
    return {
      redirect: {
        destination, // Redirects to the payment link
        permanent: false, // Not a permanent redirect, since it's session-based
      },
    };
  }

  // If ID doesn't exist, redirect to a fallback page
  return {
    redirect: {
      destination: "/not-found", // Or some error page
      permanent: false,
    },
  };
};

export default RedirectPage;
