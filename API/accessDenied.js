export default function handler(req, res) {
  res.status(403).send(
    "Access Denied\nContact LoneByte"
  );
}
