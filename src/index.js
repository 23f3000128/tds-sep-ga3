// TDS GA3 Worker
//   GET  /face.glb               -> Q6 3D face model (served from public/)
//   /a2a/...                     -> Q2 A2A invoice agent        (coming next)
//   POST /v1/mailroom/actions    -> Q3 safe mailroom agent      (coming next)
//   /v2/incidents/...            -> Q4 incident triage agent    (coming next)

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === "/healthz") {
      return Response.json({ status: "ok" });
    }

    // Anything not handled yet falls through to the static files in public/
    return env.ASSETS.fetch(request);
  },
};
