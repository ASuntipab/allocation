﻿using System;
using System.Collections.Generic;
using MongoDB.Bson;

namespace UploadExcelAPI.Domains.Output
{
    public interface IOutput
    {
        public ObjectId _id { get; set; }

        public string Version { get; set; }

        public DateTime DateCreated { get; set; }

        public IEnumerable<IOutput.IItem> Items { get; set; }

        public interface IItem
        {
            public int? Month { get; set; }

            public int? Year { get; set; }

            public double? Value { get; set; }

            public IItem CreateInstance(int? Month, int? Year, double? Value);
        }

    }
}