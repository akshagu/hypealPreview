import { usePlaidLink, PlaidLink } from 'react-plaid-link';

function KYC() {
  const handleOnExit = ({tw}) => {};
  const handleOnSuccess = ({tw}) => {};

  return (
    <div className="KYC">
      <PlaidLink
        style={{backgroundColor:'#FFEB3B',color:"#000000", padding:10}}
        clientName="React Plaid Setup"
        env="sandbox"
        product={["auth", "transactions"]}
        publicKey="add your public key here"
        onExit={handleOnExit}
        onSuccess={handleOnSuccess}
        className="test"
      >
        Reserve Free token      
      </PlaidLink>
    </div>
  );
}

export default KYC;
