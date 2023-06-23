import { usePlaidLink, PlaidLinkOnSuccess } from 'react-plaid-link';
import HButton from "../components/HButton.js";
import { useState, useEffect, useCallback } from 'react';

function KYC() {
  const [token, setToken] = useState(null);

  // get link_token from your server when component mounts
  useEffect(() => {
    const createLinkToken = async () => {
      const response = await fetch('/api/create_link_token', { method: 'POST' });
      const { link_token } = await response.json();
      setToken(link_token);
    };
    createLinkToken();
  }, []);

  const onSuccess = useCallback<PlaidLinkOnSuccess>((publicToken, metadata) => {
    // send public_token to your server
    // https://plaid.com/docs/api/tokens/#token-exchange-flow
    console.log(publicToken, metadata);
  }, []);

  const { open, ready } = usePlaidLink({
    token,
    onSuccess,
    // onEvent
    // onExit
  });

  return (
    <div className="KYC">
      <HButton variant="contained" color="primary" onClick={() => open()} disabled={!ready}>
        Reserve Free Token
      </HButton>
    </div>
  );
}

export default KYC;
