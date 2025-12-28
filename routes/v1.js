const systemUtilize = [
    { method: "GET", path: "/healthCheck", handler: (req, h) => { return h.response("System Ok").code(200) }  },
]

module.exports = [
    ...systemUtilize
];