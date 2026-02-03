export default function handler(req, res) {
  res.status(401).send(
    "Unauthorized Access\nContact LoneByte"
  );
}
