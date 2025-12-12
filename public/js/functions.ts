const degToRad = (deg: number) => {
  return (deg * Math.PI) / 180;
};

const toCartesian = (elevDeg: number, azDeg: number, r: number) => {
  const e = degToRad(elevDeg);
  const a = degToRad(azDeg);

  return {
    x: r * Math.cos(e) * Math.cos(a),
    y: r * Math.cos(e) * Math.sin(a),
    z: r * Math.sin(e),
  };
};

export function oneWayDistance(
  elev1: number,
  az1: number,
  r1: number,
  elev2: number,
  az2: number,
  r2: number
): number {
  const p1 = toCartesian(elev1, az1, r1);
  const p2 = toCartesian(elev2, az2, r2);

  const dx = p2.x - p1.x;
  const dy = p2.y - p1.y;
  const dz = p2.z - p1.z;

  return Math.sqrt(dx * dx + dy * dy + dz * dz);
}

// Jump Distance Constant is required so the route planner does not try to jump back and forth between systems in the route.
// It will optimize so that everything is picked up and dropped in each system first. THEN it will go to the next system.
// TODO: Figure out how to make sure it does not error if there is a pickup/drop that is in another system.
// Will it know to go to the next system, and then do everything and then return to the previous system? I don't know yet.
export const jumpDistanceConstant = 500;
