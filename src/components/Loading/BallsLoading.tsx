const BallsLoading = () => {
   return (
      <div className="loading">
         <div style={{ ['--value' as any]: 1 }}></div>
         <div style={{ ['--value' as any]: 2 }}></div>
         <div style={{ ['--value' as any]: 3 }}></div>
         <div style={{ ['--value' as any]: 4 }}></div>
         <div style={{ ['--value' as any]: 5 }}></div>
      </div>
   );
};

export default BallsLoading;
